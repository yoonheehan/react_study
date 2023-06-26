const apiRequest = async (url = "", optionObject = null, Err = null) => {
  const result = await fetch(url, optionObject)
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      console.log(err);
    });

  return result;
};

export default apiRequest;
