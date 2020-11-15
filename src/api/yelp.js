import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer 19gBLqMc0iLx8Z4R6gBcdMFwk7KgU63_jJErimoM3s1vFQzVTwxWN3YVMIeQ6NMKWgt5Bcf1g2KDyu0uW06YzrtcdXKNBUtpKSxm1GXPPxrEzZ7fILKoJ5qDnw-qX3Yx'
    }
});