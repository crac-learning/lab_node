const isDev = process.env.NODE_ENV !== "production";
const whiteListURLS: string[] = [];

if (isDev) {
  whiteListURLS.push("http://localhost:5173");
  whiteListURLS.push("http://localhost:5174");
} else {
}

const corsConfig = {
  credentials: true,
  methods: "GET,PUT,POST,DELETE,OPTIONS",
  allowedHeaders: "Content-Type,Authorization",
  origin: function (
    origin: string | undefined,
    callback: (error: Error | null, status: boolean) => void
  ) {
    if (whiteListURLS.indexOf(origin || "") !== -1 || origin === undefined) {
      callback(null, true);
    } else {
      throw new Error("unauthorized Domain");
    }
  },
};

export default corsConfig;
