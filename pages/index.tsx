import type { NextPage } from 'next';
import Layout from '../components/layout/layout';
import styles from '../styles/Home.module.css';
import { CONTAINER } from '../utils';

const Home: NextPage = () => {
    return (
        <Layout
            title="Covalence | Home"
            description="Premium, online, software education">
            <section className={CONTAINER}>
                <div className="text-center py-10">
                    <h1 className="text-3xl font-semibold">Hello World!</h1>
                    <h2 className="text-xl text-gray-500 font-medium">
                        {' '}
                        - Covalence
                    </h2>
                </div>
            </section>
        </Layout>
    );
};

export default Home;
