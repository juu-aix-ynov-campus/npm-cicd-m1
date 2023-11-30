const Add = (...args) => args.reduce((a, b) => a + b, 0);

const ComputeService = { Add };

export default ComputeService;
