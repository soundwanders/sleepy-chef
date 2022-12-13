import ContainerBlock from '@components/ContainerBlock';

const defaultEndpoint = `http://localhost:3000/api/recipes`;

export async function getServerSideProps({ query }) {
  const { id } = query;
  const res = await fetch(`${defaultEndpoint}${id}`);
  const data = await res.json();

  return {
    props: {
      data
    }
  }
};

export default function Recipe({ data }) {
  const { name, type, vegetarian, vegan, directions } = data;

  return (
    <ContainerBlock>
      <h1 className="title">{ name }</h1>

      <div className="profile">
        <div className="profile-image">
          <img src={image} alt={name} />
        </div>
        <div className="profile-details">
          <h2>Recipe Details</h2>
          <ul>
            <li>
              <strong>Name:</strong> { name }
            </li>
            <li>
              <strong>Type:</strong> { type }
            </li>
            <li>
              <strong>Vegetarian:</strong> { vegetarian }
            </li>
            <li>
              <strong>Vegan:</strong> { vegan }
            </li>
            <li>
              <strong>Directions:</strong> { directions }
            </li>
          </ul>
        </div>
      </div>
    </ContainerBlock>
  )
};