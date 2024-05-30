import { useSelector } from "react-redux";
import { TagButton } from "../components/TagButton";

export function TagList () {
    const tags = useSelector(state => state.tags);

    return (
        <>
        {tags.map((item) => <TagButton tagname={item} key={item}/>)}
        </> 
    )

}