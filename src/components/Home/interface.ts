export interface IFileCardProps {
  name: string;
  type: string;
  size: string;
}

export type AsidePropsType = {
  files: IFileCardProps[];
  isOpen: boolean;
};
