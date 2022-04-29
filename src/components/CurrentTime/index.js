function CurrentTime() {
    let t = Date.now();

    setInterval(() => t = Date.now(), 1000);
    
    return (
        <div>{ t }</div>
    );
}

export default CurrentTime;