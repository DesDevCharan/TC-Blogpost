import { useContext, useEffect, useState } from 'react';

import { getCategories } from '../../../api/requests';
import { PostContext } from '../../../App';
import { generateColorMapper } from '../../../utils/util';

import './Category.scss';

function Category() {
    const [categories, setCategories] = useState([]);
    const { category, setCategory } = useContext(PostContext);

    const loadCategories = () => {
        getCategories()
            .then(response => {
                setCategories(response.categories);
                generateColorMapper(response.categories);
            })
            .catch(error => console.log(error));
    };

    const selectCategory = (value) => {
        setCategory(value);
    };

    /* eslint-disable react-hooks/exhaustive-deps */
    useEffect(() => {
        loadCategories();
    }, []);

    return (
        <label>
            <select onChange={(ev) => selectCategory(ev.target.value)} value={category}>
            <option key="NONE" value="">All Categories</option>
                {categories.map(cat => (<option key={cat.ID} value={cat.name}>{cat.name}</option>))}
            </select>
        </label>
    );
}

export default Category;
