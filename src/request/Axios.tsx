import axios from "axios";

const PostData = async  (data:any) =>{
    
    await axios.post('https://multisteps.onrender.com/api/data',{
        name:data.name,
        email:data.email,
        phone:data.phone,
        plan: {
          title:data.plan.name,
          money:data.plan.price
        },
        addOns:data.addOns.map((addOn:any) => ({
          title: addOn.name,
          money: addOn.price
        })),
    })
      .then((response) => {
        console.log(response);
      });
}

export default PostData