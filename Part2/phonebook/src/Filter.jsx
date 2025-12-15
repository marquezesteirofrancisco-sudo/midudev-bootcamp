
const Filter = ({ search, handleNameFilterPhoneBook }) => {

    return (
    <>
        <p> Filter show with  
            <input name="filter" value={search} onChange={handleNameFilterPhoneBook} />
        </p>
    </>
 )
}

export default Filter