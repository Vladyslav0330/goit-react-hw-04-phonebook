import PropTypes from 'prop-types';

export function Filter({ onChange }) {
  return (
    <label>
      <p>Find contacts by name</p>
      <input
        type="text"
        name="filter"
        onChange={({ target }) => onChange(target.value)}
      />
    </label>
  );
}

Filter.propTypes = {
  onchange: PropTypes.array,
};
