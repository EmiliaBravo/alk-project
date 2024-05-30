import { useSelector } from "react-redux";
import { MemeComp } from "../components/MemeComp";


export function TagPage() {
    const images = useSelector(state => state.images);
    const currentTag = useSelector(state => state.currentTag);
    
      return(
        <>
        <h2>#{currentTag}</h2>
        {images.filter((a) => a.tags.includes(currentTag)).map((img) => (<MemeComp key={img.imgID} src={img.src} title={img.title} upvotes={img.upvotes} downvotes={img.downvotes} imgID={img.imgID} tags={img.tags}/>))}
        </>
      )

}