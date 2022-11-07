export interface IFileCardProps {
  name: string;
  type: string;
  size: string | number;
}
export interface IFile {
  tag: string;
  file: {
    name: string;
    type: string;
    size: string | number;
  };
}

export type AsidePropsType = {
  files: IFileCardProps[];
  isOpen: boolean;
};
