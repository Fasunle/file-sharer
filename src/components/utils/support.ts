import {IFileCardProps} from '../interface';

/**
 * support document and audio in addition to images
 */
const supported = new Set(['jpeg', 'jpg', 'png', 'txt', 'pdf', 'mp3']);

export function isSupport(file: IFileCardProps): boolean {
  const fileParams = file.name.split('.');
  const fileLength = fileParams.length;
  const extension = fileParams[fileLength - 1];
  return supported.has(extension);
}
