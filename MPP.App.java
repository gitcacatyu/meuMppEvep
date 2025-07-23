import javax.swing.*;
import java.awt.*;
import java.awt.event.*;

public class MPPApp extends JFrame {

    public MPPApp() {
        setTitle("MPP 2 - Sistema Deluxe");
        setSize(600, 600);
        setDefaultCloseOperation(EXIT_ON_CLOSE);
        setLocationRelativeTo(null);

        // Painel principal
        JPanel panel = new JPanel();
        panel.setLayout(new BoxLayout(panel, BoxLayout.Y_AXIS));
        panel.setBackground(new Color(180, 180, 180));

        // Botão de voltar
        JButton voltarBtn = new JButton("<-- Voltar");
        voltarBtn.setAlignmentX(Component.CENTER_ALIGNMENT);
        voltarBtn.addActionListener(e -> JOptionPane.showMessageDialog(this, "Voltando pra tela anterior..."));
        panel.add(voltarBtn);

        // Título
        JLabel title = new JLabel("MPP");
        title.setFont(new Font("Arial", Font.BOLD, 32));
        title.setAlignmentX(Component.CENTER_ALIGNMENT);
        panel.add(title);

        // Conteúdo
        JTextArea content = new JTextArea(
            "🧠 Sobre o Sistema:\n\n" +
            "O MPP é uma solução inovadora desenvolvida para simplificar e otimizar processos. " +
            "Com funcionalidades avançadas e uma interface intuitiva, permite resultados mais rápidos e eficazes.\n\n" +
            "✅ Funcionalidades:\n" +
            "• Automação Inteligente\n" +
            "• Gestão Centralizada\n" +
            "• Relatórios em Tempo Real\n" +
            "• Segurança Avançada\n\n" +
            "📌 Por que escolher o MPP?\n" +
            "• Suporte técnico especializado\n" +
            "• Atualizações frequentes com novas funcionalidades\n\n" +
            "📚 O que é Sistema?\n" +
            "Sistema é um conjunto de elementos interligados que trabalham juntos pra atingir um objetivo específico.\n\n" +
            "👩‍💻 Criadores: Carlos Alberto e Rebeca Lacerda\n" +
            "🎨 Design: Rebeca Lacerda | ✏️ Conteúdo: Carlos Alberto"
        );
        content.setFont(new Font("Arial", Font.PLAIN, 14));
        content.setEditable(false);
        content.setLineWrap(true);
        content.setWrapStyleWord(true);
        content.setBackground(new Color(210, 210, 210));
        content.setBorder(BorderFactory.createEmptyBorder(10, 10, 10, 10));

        JScrollPane scrollPane = new JScrollPane(content);
        scrollPane.setPreferredSize(new Dimension(550, 400));
        panel.add(Box.createRigidArea(new Dimension(0, 20)));
        panel.add(scrollPane);

        add(panel);
        setVisible(true);
    }

    public static void main(String[] args) {
        // Ativa modo visual do sistema
        try {
            UIManager.setLookAndFeel(UIManager.getSystemLookAndFeelClassName());
        } catch (Exception ignored) {}

        new MPPApp();
    }
}
