import { useState, FormEvent, useEffect } from "react";
import { useNavigate, useSearchParams, Link } from "react-router-dom";
import { BarChart3, Eye, EyeOff, ArrowLeft, CheckCircle2, XCircle } from "lucide-react";
import { updatePassword } from "@/contexts/AuthContext";
import { RESET_TOKEN_KEY } from "./ForgotPasswordPage";

const ResetPasswordPage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [tokenValid, setTokenValid] = useState<boolean | null>(null);

  useEffect(() => {
    const token = searchParams.get("token");
    if (!token) {
      setTokenValid(false);
      return;
    }

    const stored = localStorage.getItem(RESET_TOKEN_KEY);
    if (!stored) {
      setTokenValid(false);
      return;
    }

    try {
      const { token: storedToken, expiry } = JSON.parse(stored);
      if (token === storedToken && Date.now() < expiry) {
        setTokenValid(true);
      } else {
        setTokenValid(false);
      }
    } catch {
      setTokenValid(false);
    }
  }, [searchParams]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError("");

    if (password.length < 8) {
      setError("A senha deve ter pelo menos 8 caracteres.");
      return;
    }
    if (password !== confirm) {
      setError("As senhas não coincidem.");
      return;
    }

    setLoading(true);
    await new Promise((r) => setTimeout(r, 600));

    updatePassword(password);
    localStorage.removeItem(RESET_TOKEN_KEY);
    setSuccess(true);
    setLoading(false);

    setTimeout(() => navigate("/login"), 3000);
  };

  if (tokenValid === null) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <span className="w-6 h-6 border-2 border-primary/40 border-t-primary rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-accent/20 blur-3xl" />
      </div>

      <div className="relative w-full max-w-md">
        <div className="bg-card border border-border rounded-2xl shadow-xl p-8 space-y-7">
          {/* Logo */}
          <div className="flex flex-col items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-primary/15 flex items-center justify-center">
              <BarChart3 className="w-6 h-6 text-primary" />
            </div>
            <div className="text-center">
              <h1 className="text-2xl font-bold text-foreground tracking-tight">
                Appmax<span className="text-muted-foreground font-normal">BI</span>
              </h1>
              <p className="text-sm text-muted-foreground mt-1">
                Criar nova senha
              </p>
            </div>
          </div>

          {/* Token inválido ou expirado */}
          {!tokenValid && (
            <div className="space-y-5">
              <div className="flex flex-col items-center gap-3 text-center py-2">
                <XCircle className="w-12 h-12 text-destructive" />
                <p className="text-sm text-foreground font-medium">
                  Link inválido ou expirado.
                </p>
                <p className="text-xs text-muted-foreground">
                  Solicite um novo link de recuperação de senha.
                </p>
              </div>
              <Link
                to="/forgot-password"
                className="w-full h-10 rounded-lg bg-primary text-primary-foreground text-sm font-semibold flex items-center justify-center gap-2 hover:bg-primary/90 transition"
              >
                Solicitar novo link
              </Link>
            </div>
          )}

          {/* Sucesso */}
          {tokenValid && success && (
            <div className="flex flex-col items-center gap-3 text-center py-2">
              <CheckCircle2 className="w-12 h-12 text-green-500" />
              <p className="text-sm text-foreground font-medium">
                Senha alterada com sucesso!
              </p>
              <p className="text-xs text-muted-foreground">
                Redirecionando para o login...
              </p>
            </div>
          )}

          {/* Formulário */}
          {tokenValid && !success && (
            <form onSubmit={handleSubmit} className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Digite sua nova senha abaixo.
              </p>

              {/* Nova senha */}
              <div className="space-y-1.5">
                <label htmlFor="password" className="text-sm font-medium text-foreground">
                  Nova senha
                </label>
                <div className="relative">
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Mínimo 8 caracteres"
                    className="w-full h-10 px-3 pr-10 rounded-lg border border-input bg-background text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((v) => !v)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition"
                    tabIndex={-1}
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Confirmar senha */}
              <div className="space-y-1.5">
                <label htmlFor="confirm" className="text-sm font-medium text-foreground">
                  Confirmar nova senha
                </label>
                <div className="relative">
                  <input
                    id="confirm"
                    type={showConfirm ? "text" : "password"}
                    required
                    value={confirm}
                    onChange={(e) => setConfirm(e.target.value)}
                    placeholder="Repita a nova senha"
                    className="w-full h-10 px-3 pr-10 rounded-lg border border-input bg-background text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirm((v) => !v)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition"
                    tabIndex={-1}
                  >
                    {showConfirm ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {error && (
                <p className="text-sm text-destructive bg-destructive/10 border border-destructive/20 rounded-lg px-3 py-2">
                  {error}
                </p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full h-10 rounded-lg bg-primary text-primary-foreground text-sm font-semibold flex items-center justify-center gap-2 hover:bg-primary/90 active:scale-[0.98] transition disabled:opacity-60 disabled:cursor-not-allowed mt-2"
              >
                {loading ? (
                  <span className="w-4 h-4 border-2 border-primary-foreground/40 border-t-primary-foreground rounded-full animate-spin" />
                ) : (
                  "Salvar nova senha"
                )}
              </button>

              <Link
                to="/login"
                className="flex items-center justify-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                Voltar para o login
              </Link>
            </form>
          )}
        </div>

        <p className="text-center text-xs text-muted-foreground mt-5">
          © {new Date().getFullYear()} Appmax. Todos os direitos reservados.
        </p>
      </div>
    </div>
  );
};

export default ResetPasswordPage;
