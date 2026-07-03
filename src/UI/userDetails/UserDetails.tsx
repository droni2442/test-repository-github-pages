import React, { useEffect } from 'react';
import { TUser } from '../../types/types';
import { useUser } from '../../hooks/useUser';
import styles from './UserDetails.module.scss';

const UserDetails = ({ userId }: { userId: number }) => {
    const { loading, user, fetchUser } = useUser();

    useEffect(() => {
        fetchUser(userId);
    }, [userId]);

    if (loading) {
        return 'Loading...';
    }

    if (!user) {
        return (
            <div className={styles.card}>
                <div className={styles.error}>Пользователь не найден 😕</div>
            </div>
        );
    }

    const { name, username, email, phone, website, address, company } = user;

    const initials = name
        .split(' ')
        .map((n) => n[0])
        .join('');

    return (
        <div className={styles.card}>
            <div className={styles.header}>
                <div className={styles.avatar}>{initials}</div>
                <div className={styles.info}>
                    <h2 className={styles.name}>{name}</h2>
                    <p className={styles.username}>@{username}</p>
                </div>
            </div>

            <div className={styles.grid}>
                <div className={styles.section}>
                    <h3 className={styles.sectionTitle}>📞 Контакты</h3>
                    <p className={styles.text}>
                        <strong>Email:</strong> {email}
                    </p>
                    <p className={styles.text}>
                        <strong>Телефон:</strong> {phone}
                    </p>
                    <p className={styles.text}>
                        <strong>Сайт:</strong>{' '}
                        <a
                            href={`https://${website}`}
                            target='_blank'
                            rel='noreferrer'
                            className={styles.link}
                        >
                            {website}
                        </a>
                    </p>
                </div>

                <div className={styles.section}>
                    <h3 className={styles.sectionTitle}>💼 Компания</h3>
                    <p className={styles.companyName}>{company.name}</p>
                    <p className={styles.tagline}>«{company.catchPhrase}»</p>
                    <p className={styles.subText}>{company.bs}</p>
                </div>

                {/* Здесь объединяем два класса через шаблонную строку */}
                <div className={`${styles.section} ${styles.fullWidth}`}>
                    <h3 className={styles.sectionTitle}>📍 Адрес проживания</h3>
                    <p className={styles.text}>
                        {address.zipcode}, г. {address.city}, {address.street},{' '}
                        {address.suite}
                    </p>
                    <div className={styles.geoBadge}>
                        🌍 Geo:{' '}
                        <span className={styles.code}>
                            {address.geo.lat}, {address.geo.lng}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserDetails;