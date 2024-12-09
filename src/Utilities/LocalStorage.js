import { toast } from "react-toastify";


// read list 
const getStoredReadList = () => {
    const existGadget = localStorage.getItem("read-list")
    if (existGadget) {
        return JSON.parse(existGadget)
    }
    else {
        return []
    }
}
const addToStoredReadList = (gadget) => {
    const existGadget = getStoredReadList()

    existGadget.push(gadget)
    localStorage.setItem('read-list', JSON.stringify(existGadget))

}

// wish list 
const getStoredWishList = () => {
    const existGadget = localStorage.getItem("wish-list")
    if (existGadget) {
        return JSON.parse(existGadget)
    }
    else {
        return []
    }
}
const addToStoredWishList = (gadget) => {
    // console.log(gadget)
    const existGadget = getStoredWishList()

    existGadget.push(gadget)
    const setGadget = localStorage.setItem('wish-list', JSON.stringify(existGadget))

}
const removeRead = id=>{
    const existGadget = getStoredReadList()
    const remaining = existGadget.filter(gadget=>gadget.product_id != id)
    // console.log(remaining)
    localStorage.setItem('read-list', JSON.stringify(remaining))
    toast.success("Deleted success")
    
    
}
export { addToStoredReadList, getStoredReadList, addToStoredWishList, getStoredWishList, removeRead}