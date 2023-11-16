import { useEffect } from 'react';
import { useState } from 'react';

export default function 문항수() {
    const [isInit, setIsInit] = useState(true);
    const [list, setList] = useState([]);
    const [ta, setTa] = useState('');
    const [cnt1, setCnt1] = useState(0);
    const [cnt2, setCnt2] = useState(0);

    const [pdfSrc, setPdfSrc] = useState('');

    const handleTa = (e) => {
        const { value } = e.target;
        const list = value.split(/\n/).map((i) => i.split(/\t/g));
        setList(list);
        setPdfSrc(list[0][1]);
        setIsInit(false);
    };

    const handleURL = (e) => {
        const { idx } = e.target.dataset;
        setPdfSrc(list[idx][1]);
        setCnt1(0);
        setCnt2(0);
    };

    useEffect(() => {
        const record = localStorage.getItem('obj');
        if (record) {
            const obj = JSON.parse(record);
            const { cnt1, cnt2, pdfSrc } = obj;
            setCnt1(cnt1);
            setCnt2(cnt2);
            setPdfSrc(pdfSrc);
            setIsInit(true);
            console.log('??');
        }

        return () => {
            localStorage.setItem(
                'obj',
                JSON.stringify({
                    cnt1,
                    cnt2,
                    pdfSrc,
                })
            );
        };
    }, []);

    return (
        <main>
            {isInit ? (
                <textarea defaultValue={ta} onChange={handleTa}></textarea>
            ) : (
                <div
                    style={{ position: 'absolute', width: '100vw', height: '100vh', top: 0, left: 0, zIndex: 1001100 }}
                >
                    <nav
                        style={{
                            backgroundColor: 'var(--main-bgcolor)',
                            display: 'flex',
                            overflowX: 'auto',
                            whiteSpace: 'nowrap',
                        }}
                    >
                        <button onClick={() => setIsInit(true)}>새로하기</button>
                        {list.map((i, idx) => (
                            <button onClick={handleURL} data-idx={idx}>
                                {i[0]}
                            </button>
                        ))}
                    </nav>
                    <div
                        style={{
                            position: 'absolute',
                            bottom: '25%',
                            left: '70%',
                            gap: '1rem',
                        }}
                    >
                        <div style={{ display: 'flex', color: 'black', gap: '1rem' }}>
                            <button
                                onClick={() => {
                                    setCnt1(cnt1 - 1);
                                }}
                            >
                                -
                            </button>
                            변형: {cnt1}
                            <button
                                onClick={() => {
                                    setCnt1(cnt1 + 1);
                                }}
                            >
                                +
                            </button>
                        </div>
                        <div style={{ display: 'flex', color: 'black', gap: '1rem' }}>
                            <button
                                onClick={() => {
                                    setCnt2(cnt2 - 1);
                                }}
                            >
                                -
                            </button>
                            워크: {cnt2}
                            <button
                                onClick={() => {
                                    setCnt2(cnt2 + 1);
                                }}
                            >
                                +
                            </button>
                        </div>
                        <div style={{ color: 'black', gap: '1rem', textAlign: 'right', width: '100%' }}>
                            종합: {cnt1 + cnt2}
                        </div>
                    </div>
                    <iframe src={pdfSrc} style={{ width: '100%', height: '100%' }}></iframe>
                </div>
            )}
        </main>
    );
}
