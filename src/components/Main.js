import "../style/card.css"
import ItemListContainer from "./Itemlistcontainer"
const Main = () =>{
    return(
        <>
            <div className="container-page">
                <ItemListContainer img ="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/9c4e6929-fbbc-495e-b8af-ec76d6e163fd/wio-8-zapatillas-de-running-asfalto-xNW8fz.png" title = "NIKE AIR ZOOM" description="Zapatillas de adultos"/>
                <ItemListContainer img ="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/d0639191-c785-4deb-8687-a60ab5e6a096/downshifter-11-zapatillas-de-running-asfalto-C23VWL.png" title ="NIKE RUNNING" description="Zapatillas de adultos"/>
                <ItemListContainer img ="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4f37fca8-6bce-43e7-ad07-f57ae3c13142/air-force-1-07-zapatillas-GjGXSP.png" title="NIKE AIR FORCE" description="Zapatillas de adultos"/>
            </div>
        </>
    )
}

export default Main