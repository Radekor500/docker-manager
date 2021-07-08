import './containers.css'
function Images({onCheck, handleOpt, images, filtered}) {

    

    let renderImages = () => {
        return (
            images.map((image, index) => {
                return (
                    <tr key={index}>
                        <td><input onChange={onCheck} className='check' value={image.Id} type='checkbox'></input> {image.Id}</td>
                        {/* <td>{image.id}</td> */}
                        <td>{image.RepoTags}</td>
                        <td>{(Math.round((image.Size / 1048576) * 100) / 100) + 'MB'}</td>
                        <td>{new Date(image.Created * 1000).toLocaleDateString()} </td>
                    </tr>
                )
            })
        )
        
    }
    return (
        <div className='grid-wrap'>
            <table className='images'>
                <tr>
                    <th>ID</th>
                    <th>Tags</th>
                    <th>Size</th>
                    <th>Created</th>
                </tr>
                {renderImages()}
            </table>
        
        </div>
    )
    
}

export default Images;