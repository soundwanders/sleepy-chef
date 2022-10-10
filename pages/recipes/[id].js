import { useRouter } from 'next/router';
import useSwr from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function Recipe() {
  const router = useRouter()
  const { data, error } = useSwr(
    router.query.id ? `/api/recipes/${router.query.id}` : null,
    fetcher
  );

  if (error) return <div>Failed to load recipe</div>
  if (!data) return <div>Loading...</div>

  return (
    <ul>
      {data.map((data) => (
        <li key={data.id}>
          <Link href="/recipes/[id]" as={`/recipes/${data.id}`}>
            <a>{`Recipe ${data.id} ${data.name}`}</a>
          </Link>
        </li>
      ))}
    </ul>
  )
};