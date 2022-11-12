import {useParams} from 'react-router-dom';

export default function File() {
  const params = useParams();
  if (params.downloadLink === undefined) return <h1>Invalid download link</h1>;

  const payload = params.downloadLink.split('-');
  let filename = payload[0];
  const extension = payload[1].split('.')[1];
  filename = filename.concat(extension);

  return (
    <div className='font-mono'>
      <h1>Filename: {filename}</h1>
      <img src={params.downloadLink} alt={filename} />
    </div>
  );
}
