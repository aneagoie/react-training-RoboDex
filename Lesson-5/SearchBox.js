import React from 'react';

const SearchBox = (props) => {
  const { onSearchChange } = props
  return (
    <div className='mw6 center'>
      <input
        type="search"
        placeholder="search robots..."
        onChange={onSearchChange}
      />
    </div>
  );
};

SearchBox.propTypes = {
  onSearchChange: React.PropTypes.func.isRequired
}

export default SearchBox;