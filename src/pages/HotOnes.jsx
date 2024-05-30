import { useSelector } from "react-redux";
import { MemeComp } from "../components/MemeComp";


export function HotOnes() {
    const images = useSelector(state => state.images);
    
      return(
        <>
        {images.filter((a) => (a.upvotes-a.downvotes)>5).map((img) => (<MemeComp key={img.imgID} src={img.src} title={img.title} upvotes={img.upvotes} downvotes={img.downvotes} imgID={img.imgID} tags={img.tags}/>))}
        </>
      )

}