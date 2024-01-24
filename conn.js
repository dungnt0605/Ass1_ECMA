async function fetchVe() {
    try {
      const response = await fetch(`http://localhost:3000/Ve`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      
      if (Array.isArray(data)) {
        return data;
      } else {
        return [];
      }
    } catch (error) {
      return [];
    }
  }
async function fetchDanhMucVe() {
    try {
      const response = await fetch(`http://localhost:3000/danhMucVe`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      
      if (Array.isArray(data)) {
        return data;
      } else {
        return [];
      }
    } catch (error) {
      return [];
    }
  }
  
const dataArrayVe = await fetchVe();
const dataArrayDanhMucVe = await fetchDanhMucVe();
export {dataArrayVe, dataArrayDanhMucVe };
