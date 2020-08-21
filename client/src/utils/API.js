import axios from "axios";

export default {
  search: function (query) {
    // return axios.get(BASEURL + query);
  },

  saveOrder: function (orderData) {
      // console.log(orderData)
    return axios.post("/api/orders", orderData);
  },

};
