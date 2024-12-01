import { SignUp } from '@clerk/nextjs';

export default function Page() {
  return (
    <div style={styles.container}>
        <SignUp />
      </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh', // Full viewport height
    backgroundColor: '#f5f5f5', // Optional background color
  }
};
