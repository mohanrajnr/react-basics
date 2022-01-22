let lastId = 0;
const NewIDGenerator = (prefix = "id") => {
  lastId++;
  return `${prefix}${lastId}${new Date().getTime()}`;
};
export default NewIDGenerator;
