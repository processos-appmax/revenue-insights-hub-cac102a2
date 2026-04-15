import { useState, FormEvent } from "react";
import { Link } from "react-router-dom";
import { BarChart3, ArrowLeft, Mail, CheckCircle2 } from "lucide-react";
import emailjs from "@emailjs/browser";
import { VALID_EMAIL } from "@/contexts/AuthContext";

const RESET_TOKEN_KEY = "password_reset_token";

function generateToken(): string {
  return crypto.randomUUID().replace(/-/g, "");
}

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    // Simulação de delay para UX
    await new Promise((r) => setTimeout(r, 600));

    if (email.toLowerCase() !== VALID_EMAIL.toLowerCase()) {
      // Por segurança, exibimos mensagem genérica mesmo para e-mails inválidos
      setSent(true);
      setLoading(false);
      return;
    }

    const token = generateToken();
    const expiry = Date.now() + 60 * 60 * 1000; // 1 hora
    localStorage.setItem(RESET_TOKEN_KEY, JSON.stringify({ token, expiry }));

    const resetLink = `${window.location.origin}/reset-password?token=${token}`;

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          to_email: email,
          reset_link: resetLink,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      setSent(true);
    } catch {
      setError("Não foi possível enviar o e-mail. Tente novamente mais tarde.");
    } finally {
      setLoading(false);
    }
  };

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
                Recuperação de senha
              </p>
            </div>
          </div>

          {sent ? (
            <div className="space-y-5">
              <div className="flex flex-col items-center gap-3 text-center py-2">
                <CheckCircle2 className="w-12 h-12 text-green-500" />
                <p className="text-sm text-foreground font-medium">
                  Se esse e-mail estiver cadastrado, você receberá um link para redefinir sua senha em breve.
                </p>
                <p className="text-xs text-muted-foreground">
                  Verifique também a caixa de spam.
                </p>
              </div>
              <Link
                to="/login"
                className="w-full h-10 rounded-lg bg-primary text-primary-foreground text-sm font-semibold flex items-center justify-center gap-2 hover:bg-primary/90 transition"
              >
                <ArrowLeft className="w-4 h-4" />
                Voltar para o login
              </Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Informe seu e-mail e enviaremos um link para você criar uma nova senha.
              </p>

              <div className="space-y-1.5">
                <label htmlFor="email" className="text-sm font-medium text-foreground">
                  E-mail
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <input
                    id="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="seu@email.com"
                    className="w-full h-10 pl-9 pr-3 rounded-lg border border-input bg-background text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition"
                  />
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
                  "Enviar link de recuperação"
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

export default ForgotPasswordPage;
export { RESET_TOKEN_KEY };
