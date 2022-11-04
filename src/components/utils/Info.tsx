type InfoPropsType = {
  message: string;
};

export const Info = ({message}: InfoPropsType) => (
  <p className='alert-info'>{message}</p>
);
