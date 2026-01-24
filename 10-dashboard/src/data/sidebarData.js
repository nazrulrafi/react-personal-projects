import pages from "../assets/pages.png"
import dashboard from "../assets/dashboard.png"
import ecommerce from "../assets/ecommerce.png"
import profile from "../assets/profile.png"

export const sidebarData = [
    {
        title:"Dashboard",
        icon:dashboard,
        items:[
            {name:"All Data",path:"/dashboard"},
        ]
    },{
        title:"Posts",
        icon:pages,
        items:[
            {name:"All Post",path:"/dashboard/all-post"},
            {name:"Add Post",path:"/dashboard/add-post"},
        ]
    },{
        title:"Pages",
        icon:pages,
        items:[
            {name:"About",path:"/dashboard/about"},
            {name:"Contact",path:"/dashboard/contact"},
            {name:"Services",path:"/dashboard/services"},
        ]
    },{
        title:"Ecommerce",
        icon:ecommerce,
        items:[
            {name:"All Product",path:"/dashboard/all-product"},
            {name:"Add Product",path:"/dashboard/add-product"},
            {name:"Single Product",path:"/dashboard/single-product"},
            {name:"Orders",path:"/dashboard/orders"},
            {name:"Single Order",path:"/dashboard/single-order"},
        ]
    },{
        title:"User Profile",
        icon:profile,
        items:[
            {name:"Current User",path:"/dashboard/current-user"},
        ]
    }
]


