import { connect } from 'mongoose';

const URI = process.env.URI ?? '';
export const db = () => {
  return connect(URI);
};
