export function convertIsoDateToNormal(IsoDate) {
 const dateObject = new Date(IsoDate);
 const year = dateObject.getFullYear();
 const month = String(dateObject.getMonth() + 1).padStart(2, '0'); //Months are zero-based
 const day = String(dateObject.getDate()).padStart(2, '0');
 return `${year}-${month}-${day}`;
}