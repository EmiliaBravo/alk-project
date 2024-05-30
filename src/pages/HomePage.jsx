import { useSelector } from "react-redux";
import { MemeComp } from "../components/MemeComp";


export function HomePage() {
    const images = useSelector(state => state.images);
    
      return(
        <>
        {images.sort((a,b) => b.upvotes - a.upvotes).map((img) => (<MemeComp key={img.imgID} src={img.src} title={img.title} upvotes={img.upvotes} downvotes={img.downvotes} imgID={img.imgID}/>))}
        </>
      )

}