function SortBy(){


    return(
        <span>
            <select name="filter">
                <option value="date">date</option>
                <option value="comment count">comment count</option>
                <option value="votes">votes</option>
            </select>

            <select name="order">
                <option value="ascending">ascending</option>
                <option value="descending">descending</option>
            </select>
        </span>
    )
}

export default SortBy