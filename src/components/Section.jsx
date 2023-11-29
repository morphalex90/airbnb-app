function Section({ children, style = {} }) {
    return (
        <section className="section" style={style}>
            <div className="section__wrapper">
                {children}
            </div>
        </section>
    );
}

export default Section;
