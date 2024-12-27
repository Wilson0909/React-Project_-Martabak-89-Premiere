import React, { useEffect, useRef, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { v4 } from 'uuid'
import './imageSlider.css';
import { addDoc, collection, deleteDoc, getDocs, query, updateDoc, where } from 'firebase/firestore'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import { db, storage } from '../Firebase';

function ImageSlider() {
  const [index, setIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const inputRef = useRef()
  const [updateID, setupdateID] = useState('')
  const items = {
    itemID: '',
    photoUrl: '',
    caption: ''
  }
  const [item, setItem] = useState(items)

  const [slideImages, setSlideImages] = useState([items])

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  const handleUpdate = (itemID) =>{
    setShowUpdateModal(true)
    setupdateID(itemID)
  }

  const handleCloseUpdate = () => {
    setupdateID('')
    setShowUpdateModal(false)
  }

  const insertItem = async (e) => {
    e.preventDefault()
    if (inputRef.current && inputRef.current.files) {
      const file = inputRef.current.files[0]
        const storageRef = ref(storage, 'itemsImage/' + file.name)
        await uploadBytes(storageRef, file)
        const downloadUrl = await getDownloadURL(storageRef)
        try {
          await addDoc(collection(db, 'items'), {
            itemID: v4(),
            photoUrl: downloadUrl,
            caption: item.caption
          })
          alert('Insert Success!')
          setItem({
            itemID: '',
            photoUrl: '',
            caption: ''
          })
          location.reload()
          inputRef.current.value = ''
        } catch (error) {
          console.error(error)
          alert("Insert Failed!")
        }
      }
    }

    const fetchImage = async() => {
      try {
        const querySnapshot = await getDocs(collection(db, 'items'))
        const itemArray = querySnapshot.docs.map((doc) => doc.data())
        console.log(itemArray)
        setSlideImages(itemArray)
      } catch (error) {
        console.error('Error fetching data: ', error)
      }
    }

    useEffect(() => {
        fetchImage()
    },[])

    const remove = async (itemID) => {
      const confirmDelete = window.confirm('Are you sure you want to delete this item?')
      if (confirmDelete) {
        try {
          const q = query(collection(db, 'items'), where('itemID', '==', itemID))
          const querySnapshot = await getDocs(q)
          const doc = querySnapshot.docs[0]
          const docRef = doc.ref
          await deleteDoc(docRef)
          setSlideImages((prevItems) => prevItems.filter((item) => item.itemID !== itemID))
          location.reload()
        } catch (error) {
          console.error('Error deleting item: ', error)
        }
      }
    }

    const update = async (e) => {
      handleShow()
      e.preventDefault()
      const q = query(collection(db, 'items'), where('itemID', '==', updateID))
      const querySnapshot = await getDocs(q)
      const doc = querySnapshot.docs[0]
      if (inputRef.current && inputRef.current.files) {
        const file = inputRef.current.files[0]
        const storageRef = ref(storage, 'itemsImage/' + file.name)
        await uploadBytes(storageRef, file)
        const downloadUrl = await getDownloadURL(storageRef)
        try {
          const docRef = doc.ref     
            await updateDoc(docRef, {
              photoUrl: downloadUrl,
              caption: item.caption
            })
            alert('Update Success!')
            location.reload()
        } catch (error) {
          console.error(error)
          alert('Update Failed!')
        }
      }
    }

  return (
    <>

      <Carousel activeIndex={index} onSelect={handleSelect} className='carousel'>
        {slideImages.map((image, index) => (
          <Carousel.Item  key={index}>
            <img className='image-name' src={image.photoUrl} alt="slide" />
            <Carousel.Caption>
              <h3 className='imageSlider-text'>{image.caption}</h3>
              <div className='action-container'>
                <button className='action-btn update-btn' onClick={() => handleUpdate(image.itemID)}>Update</button>
                <button className='action-btn delete-btn' onClick={() => remove(image.itemID)}>Delete</button>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
        {slideImages.length < 5 && (
          <Carousel.Item>
            <div className='image-banner'>Add Image</div>
            <Carousel.Caption>
              <button className='imageSlider-img' onClick={handleShow}>Add Image</button>
            </Carousel.Caption>
          </Carousel.Item>
        )}
      </Carousel>

      <Modal show={showModal} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title className='modal-text'>Add New Image</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={insertItem}>
            <Form.Group controlId="formImageURL">
              <Form.Label className='modal-text'>Image</Form.Label>
            <Form.Control
              type="file"
              name="img"
              ref={inputRef}
            />
            </Form.Group>
            <Form.Group controlId="formCaption">
              <Form.Label className='modal-text'>Caption</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter caption"
                name="caption"
                value={item.caption}
                onChange={(e) => setItem({ ...item, caption: e.target.value })}
              />
            </Form.Group>
            <div className='button-container'>
            <button className='modal-btn' type='submit'>Add Image</button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>

      <Modal show={showUpdateModal} onHide={handleCloseUpdate} centered>
        <Modal.Header closeButton>
          <Modal.Title className='modal-text'>Update Image</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={update}>
            <Form.Group controlId="formImageURL">
              <Form.Label className='modal-text'>Image</Form.Label>
            <Form.Control
              type="file"
              name="img"
              ref={inputRef}
            />
            </Form.Group>
            <Form.Group controlId="formCaption">
              <Form.Label className='modal-text'>Caption</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter caption"
                name="caption"
                value={item.caption}
                onChange={(e) => setItem({ ...item, caption: e.target.value })}
              />
            </Form.Group>
            <div className='button-container'>
            <button className='modal-btn' type='submit'>Update Image</button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ImageSlider;
