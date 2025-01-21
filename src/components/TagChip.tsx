

interface TagChipProps{
    name: string
}
const TagChip : React.FC<TagChipProps> = ({name}) =>{
    return <span  style={{lineHeight: 1}} className="bg-white text-purple rounded-xl p-2">{name}</span>
}

export default TagChip