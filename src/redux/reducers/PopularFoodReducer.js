

const initialState =[
        {
            id:1,
            name:'grill salmon',
            url:"https://asterseniorcommunities.com/wp-content/uploads/2017/03/plate-food.jpg",
            price:22,
            intro:"Futo means large. So Futo Maki are large rolls of rice wrapped around several fillings with nori on the inside and often sesame seeds on the outcies. There are normally 10 pieces in a roll. A common examples is a California roll with crab, cucmber and avocado.",
            review:[
                {customer:'John',content:'it is good food for my heal',time:'April 4,2019'},
                {customer:'JohnDoe',content:'it is good food for my heal hu',time:'April 4,2019'},
                {customer:'JanDoe',content:'it is good food for my heal hu',time:'April 4,2019'},
            ]
        },
        {
            id:2,
            name:'grill salmon',
            url:"https://images.blogthings.com/whatthanksgivingleftoversareyouquiz/plate-of-food.jpg",
            price:22,
            intro:"Futo means large. So Futo Maki are large rolls of rice wrapped around several fillings with nori on the inside and often sesame seeds on the outcies. There are normally 10 pieces in a roll. A common examples is a California roll with crab, cucmber and avocado.",
            review:[
                {customer:'John',content:'it is good food for my heal',time:'April 4,2019'},
                {customer:'JohnDoe',content:'it is good food for my heal hu',time:'April 4,2019'},
                {customer:'JanDoe',content:'it is good food for my heal hu',time:'April 4,2019'},
            ]
    
        },
        {
            id:3,
            name:'grill salmon',
            url:"https://znews-photo.zadn.vn/w660/Uploaded/kbd_bcvi/2019_09_29/tai_xuong.jpg",
            price:22,
            intro:"Futo means large. So Futo Maki are large rolls of rice wrapped around several fillings with nori on the inside and often sesame seeds on the outcies. There are normally 10 pieces in a roll. A common examples is a California roll with crab, cucmber and avocado.",
            review:[
                {customer:'John',content:'it is good food for my heal',time:'April 4,2019'},
                {customer:'JohnDoe',content:'it is good food for my heal hu',time:'April 4,2019'},
                {customer:'JanDoe',content:'it is good food for my heal hu',time:'April 4,2019'},
            ]
    
        }
    ]



const popularFoodReducer = (state=initialState,actions)=>{
    switch(actions.type){
        default: return [...state]
    }
}


export default popularFoodReducer


