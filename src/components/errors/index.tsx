type ErrorPropsType = {
  message: string;
};

export const Error = ({message}: ErrorPropsType) => (
  <p className='error'>{message}</p>
);
