export interface IFileCardProps {
  name: string;
  type: string;
  size: string | number;
}

export type AsidePropsType = {
  files: IFileCardProps[];
  isOpen: boolean;
};
