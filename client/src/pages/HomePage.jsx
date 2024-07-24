import Header from "../components/Header.jsx"
import Sidebar from "../components/Sidebar.jsx"
import Cards from "../components/Cards.jsx"


function HomePage() {


  return (
    <div className='min-h-screen'>
      <Header />
      <main className="h-[90vh] flex gap-6 p-8 pt-0">
        <Sidebar />
        <div className="flex-1 h-full overflow-y-scroll">
        <div className="flex items-center justify-around md:grid md:grid-cols-2 xl:flex lg:justify-start flex-wrap gap-8">
            <Cards img="https://http2.mlstatic.com/D_NQ_NP_871029-MLU70486883335_072023-O.webp" 
            tittle="Redragon Impact 908" 
            category="Mouse" 
            price="19.990"/>
            
            <Cards img="https://dreamtec.cl/uploads/productos/88bee0cc-ac2c-4e88-a281-3dbbf460faac/foto_1/0-1647d110-24ca-4837-bdbc-ae8f0405fcde.webp" 
            tittle="Logitech PRO X TKL" 
            category="Keyboard" 
            price="209.990"/>
            
            <Cards img="https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaCL/128958715_03/w=800,h=800,fit=pad"
            tittle="Acer Curved 180Hz" 
            category="Monitors" 
            price="169.990"/>

            <Cards img="https://sipoonline.cl/wp-content/uploads/2023/11/Gabinete-Prisma-Pro-Black-RGB-EATX-Vidrio-Templado-USB-3.0-1-0v.png"
            tittle="Kronos Prisma Pro Black" 
            category="PC Parts" 
            price="85.990"/>

            <Cards img="https://dreamtec.cl/uploads/productos/6748e796-fea3-40aa-af40-33e3c9a11c03/foto_2/14592408_1-294f656d-ee76-4386-b3c7-d53cd6d4343e.webp"
            tittle="Redragon Epeius P009" 
            category="Mouse Pad" 
            price="30.990"/>

            <Cards img="https://raspberrypi.cl/wp-content/uploads/2023/10/8610-b-1.jpg"
            tittle="Raspberry Pi 5" 
            category="Raspberry Pi" 
            price="120.000"/>

            <Cards img="https://cdn.shopify.com/s/files/1/0068/2142/products/usb-rubber-ducky_mk2.jpg?v=1659974455"
            tittle="RubberDucky MK2" 
            category="Rubber Ducky" 
            price="75.990"/>

            <Cards img="https://shop.hak5.org/cdn/shop/products/lan-turtle_2000x.jpg?v=1592003446"
            tittle="Lan Turtle" 
            category="Lan-turtle" 
            price="70.000"/>
            </div>

        
        </div>
      </main>
    </div>
  )
}

export default HomePage