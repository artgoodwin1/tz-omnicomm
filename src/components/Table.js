import React from 'react';

const Table = ({ universities }) => {
  if (!universities.length) {
    return null;
  }

  return (
    <table className='table'>
      <tbody>
        <tr>
          <th>University name</th>
          <th>Country code</th>
          <th>Domains</th>
        </tr>
        {universities.map((u, idx) => (
          <tr key={idx}>
            <td>{u.name}</td>
            <td>{u.alpha_two_code}</td>
            <td>
              {u.domains.map((d, idx) => (
                <a key={idx} href={`https://${d}`} target="_blank">
                  {d}
                </a>
              ))}
            </td>
            <td>{}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;