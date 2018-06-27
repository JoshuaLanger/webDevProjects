import React from 'react';

const FilterSearch = ({searchFilter, searchChange}) => {
	return (
		<div 
			className='menu'
			onChange={searchChange}
		>
			<select className='pa3 ba b--red bg-pink'>
				<option value='includes'>Includes</option>
				<option value='begins'>Begins with</option>
				<option value='ends'>Ends with</option>
			</select>
		</div>
	)
}

export default FilterSearch;