function increment(itemId) {
    const orderCount = getOrderCount(itemId);
    saveOrderCountToLocalStorage(itemId, orderCount + 1);
    updateOrderCount(itemId);
  }
  
  function decrement(itemId) {
    const orderCount = getOrderCount(itemId);
    if (orderCount > 0) {
      saveOrderCountToLocalStorage(itemId, orderCount - 1);
      updateOrderCount(itemId);
    }
  }
  
  function updateOrderCount(itemId) {
    const orderCount = getOrderCount(itemId);
    document.getElementById(`orderCount${itemId}`).innerText = orderCount;
  }
  
  function getOrderCount(itemId) {
    return parseInt(localStorage.getItem(`orderCount${itemId}`)) || 0;
  }
  
  function saveOrderCountToLocalStorage(itemId, orderCount) {
    localStorage.setItem(`orderCount${itemId}`, orderCount);
  }