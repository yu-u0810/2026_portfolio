export default function Profile() {
    return (
        <section 
            id="profile"
            className="w-full border-b border-slate-200 bg-slate-50"
        >
            <div className="max-w-7xl mx-auto px-6 py-32">
                <p className="text-xs font-semibold tracking-[0.3em] text-blue-600">
                    01 / PROFILE
                </p>
                <h2 className="mt-6 text-5xl font-bold border-l-4 border-blue-400 pl-4 tracking-tight text-slate-900">
                    A LITTLE ABOUT ME
                </h2>

                <div className="mt-20 grid grid-cols-12 gap-16">
                    <div className="col-span-5">
                        <p className="text-xs font-semibold tracking-[0.3em] text-blue-600">
                            BACKGROUND
                        </p>
                        <p className="mt-6 text-2xl font-semibold leading-relaxed text-slate-600">
                            専門の枠を超え、技術で価値を生み出す。
                        </p>
                        <p className="mt-6 text-base leading-8 text-slate-600">
                            沖縄高専で生物資源工学科に在籍する中で、ソフトウェアによる課題解決に惹かれ、開発を始めました。
                            現在はNext.jsを中心としたWeb開発に加え、GoやPythonを用いた開発にも取り組んでいます。
                            最近では、プロンプトエンジニアリングを学び、AIで動く組織の開発も行っています。
                        </p>
                    </div>

                    <div className="col-span-7">
                        <p className="text-xs font-semibold tracking-[0.3em] text-blue-600">
                            DETAILS
                        </p>
                        <dl className="mt-6 border-t border-slate-300">
                            <div className="grid grid-cols-[10rem_1fr] gap-6 border-b border-slate-300 py-5">
                                <dt className="text-xs font-semibold tracking-[0.2em] text-slate-500">
                                    BORN
                                </dt>

                                <dd className="text-base font-medium text-slate-900">
                                    2007年 8月10日 
                                </dd>
                            </div>
                            <div className="grid grid-cols-[10rem_1fr] gap-6 border-b border-slate-300 py-5">
                                <dt className="text-xs font-semibold tracking-[0.2em] text-slate-500">
                                    ORIGIN
                                </dt>

                                <dd className="text-base font-medium text-slate-900">
                                    沖縄県　名護市
                                </dd>
                            </div>
                            <div className="grid grid-cols-[10rem_1fr] gap-6 border-b border-slate-300 py-5">
                                <dt className="text-xs font-semibold tracking-[0.2em] text-slate-500">
                                    SCHOOL / MAJOR
                                </dt>

                                <dd className="text-base font-medium text-slate-900">
                                    沖縄工業高等専門学校 / 生物資源工学科 4年
                                </dd>
                            </div>
                            <div className="grid grid-cols-[10rem_1fr] gap-6 border-b border-slate-300 py-5">
                                <dt className="text-xs font-semibold tracking-[0.2em] text-slate-500">
                                    HOBBIES
                                </dt>

                                <dd className="text-base font-medium text-slate-900">
                                    旅行　車　サウナ　ボウリング
                                </dd>
                            </div>
                        </dl>

                        <div className="mt-12">
                            <p className="text-xs font-semibold tracking-[0.3em] text-blue-600">
                                ACHIEVEMENTS
                            </p>
                            <ul className="mt-6 border-t border-slate-300">
                                <li className="grid grid-cols-[6rem_1fr] gap-6 border-b border-
                                slate-300 py-5">
                                    <span className="text-sm font-medium text-slate-500">
                                        2026年 2月
                                    </span>

                                    <span className="text-base font-medium text-slate-900">
                                        DCON本選出場 企業賞（NGK賞・murata製作所賞）受賞
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}