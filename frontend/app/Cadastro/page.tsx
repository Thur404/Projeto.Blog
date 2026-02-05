"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"
import { motion } from "framer-motion" 

export default function Cadastro() {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [loading, setLoading] = useState(false);
    const router = useRouter()

    const cadastrar = async (e) => {
        e.preventDefault()
        setLoading(true)

        try {
            const res = await fetch("http://localhost:3001/cadastro", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, senha })
            })

            if (res.ok) {
            
                router.push("/login")
            } else {
                alert("Erro ao cadastrar. Tente outro e-mail.")
            }
        } catch (error) {
            alert("Erro de conexão com o servidor.")
        } finally {
            setLoading(false)
        }
    }

    return (
        <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-200 p-4">
            
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 space-y-6 border border-slate-100"
            >
                <div className="text-center">
                    <h1 className="text-3xl font-bold text-slate-800">Criar Conta</h1>
                    <p className="text-slate-500 mt-2">Comece a escrever no nosso blog hoje mesmo.</p>
                </div>

                <form onSubmit={cadastrar} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">E-mail</label>
                        <input 
                            type="email"
                            required
                            placeholder="exemplo@blog.com"
                            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-slate-600"
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Senha</label>
                        <input 
                            type="password"
                            required
                            placeholder="••••••••"
                            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-slate-600"
                            value={senha} 
                            onChange={(e) => setSenha(e.target.value)}
                        />
                    </div>

                    <motion.button 
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        disabled={loading}
                        className={`w-full py-3 rounded-lg font-semibold text-white transition-all ${
                            loading ? 'bg-slate-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-200'
                        }`}
                    >
                        {loading ? "Processando..." : "Cadastrar"}
                    </motion.button>
                </form>

                <div className="relative flex items-center py-2">
                    <div className="flex-grow border-t border-slate-200"></div>
                    <span className="flex-shrink mx-4 text-slate-400 text-sm">ou</span>
                    <div className="flex-grow border-t border-slate-200"></div>
                </div>

                <p className="text-center text-sm text-slate-600">
                    Já tem uma conta? 
                    <a href="/login" className="text-blue-600 font-semibold hover:underline ml-1">Entrar</a>
                </p>
            </motion.div>
        </main>
    );
}