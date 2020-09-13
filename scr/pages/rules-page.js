import React from 'react';
import {Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {styles} from '../assets/styles/rules-style';

export function Detail() {
  const p1TelaInicial =
    'Para inicial um novo jogo toque no botão "Novo Jogo". Caso você já tenha um jogo salvo, o botão "Continuar" levará você direto para ele, porém, se você quiser começar um novo jogo mesmo tendo um jogo aberto, o botão "Novo Jogo" irá excluir o jogo antigo e iniciará um novo.';
  const p2TelaInicial =
    'O botão "Continuar" sempre estará habilitado caso tenha algum jogo já iniciado. Ele sempre te levará para o placar da rodada. Lembre-se, ele será o seu "checkpoint" caso você feche o aplicativo sem querer.';
  const p3TelaInicial =
    'Bom... o botão "Detalhes" você já sabe o que faz. Qualquer dúvida sobre como o aplicativo funciona e sobre as regras do jogo estão nesta sessão, não deixe de ler até o final.';
  //  'O botão "Sair" limpa os dados da memória (como os jogos em progresso) e fecha o aplicaditivo. Caso queria manter seu aplicativo mais leve, é altamente recomendado utilizar esta opção. Caso você feche o aplicativo manualmente, os dados se manterão salvos e você poderá continuar o jogo quando quiser.';
  const p1NovoJogo =
    'Nesta tela você poderá colocar o nome dos participantes das equipes. Estes nomes serão usados para nomear a sua equipe de uma forma diferente.';
  const p2NovoJogo =
    'Os nomes dos jogadores devem ter um formato específico. Não serão aceitos nomes com caracteres especiais (como acentos, virgulas etc) ou numéricos. Caso o nome contenha acentos, digite o nome sem eles. Caso você digite errado algum dos campos, aparecerá um aviso pedindo para você corrigir os campos que não estão conforme o formato esperado.';
  const p3NovoJogo =
    'O nome das equipes será formado de maneira aleatória utilizando os nomes dos integrantes da equipe. O programa realizará as sílabas dos nomes para criar um nome diferente toda vez que criar um novo jogo';
  const p1Placar =
    'Nesta tela você poderá realizar o registro dos pontos por rodada. Toda vez que terminar uma rodada, apenas digite a pontuação de cada equipe e toque no botão vermelho de "+" localizado na região inferior da tela.';
  const p2Placar =
    'Caso você digite por engano algum caracter que nao seja numérico, aparecerá um aviso pedindo que você corrija os campos para evitar erros na somatória dos pontos.';
  const p3Placar =
    'Os pontos em vemelhor abaixo do nome das equipes equivale à soma de todos os pontos de cada equipe.';
  const p4Placar =
    'Caso você tenha alguma dúvida durante o jogo é só tocar no botão vemelho com um "H" de "home" e voltar aqui para ler as regras. O jogo será salvo e poderá voltar ao mesmo ponto que você o deixou clicando em "Continuar" na tela inicial.';
  const p5Placar =
    'Caso você queria mudar algum integrante das equipes, você pode clicar no botão vemelho com um "X" que ele te levará de volta à página para renomar as equipes. Fique tranquilo(a), os pontos serão salvos e apenas um novo nome será gerado, podendo continuar seu jogo traquilamente.';
  const p1Obs =
    'Caso você encontre algum bug, como mal funcionamento ou divergência, é só entrar em contato. Todas as criticas e sugestões são aceitas, então não se acanhe. Agradecemos pela preferência!';
  const p1Rules = 'Escrever as regras...';

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <Text style={styles.title}>Como usar o App</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.Subtitle}>Tela Inicial</Text>
        <Text style={styles.par}>{p1TelaInicial}</Text>
        <Text style={styles.par}>{p2TelaInicial}</Text>
        <Text style={styles.par}>{p3TelaInicial}</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.Subtitle}>Nomes das Equipes</Text>
        <Text style={styles.par}>{p1NovoJogo}</Text>
        <Text style={styles.par}>{p2NovoJogo}</Text>
        <Text style={styles.par}>{p3NovoJogo}</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.Subtitle}>Tela de Pontos</Text>
        <Text style={styles.par}>{p1Placar}</Text>
        <View style={styles.buttonView}>
          <View style={styles.buttonContainer}>
            <Text style={styles.button}>+</Text>
          </View>
        </View>
        <Text style={styles.par}>{p2Placar}</Text>
        <Text style={styles.par}>{p3Placar}</Text>
        <Text style={styles.par}>{p4Placar}</Text>
        <View style={styles.buttonView}>
          <View style={styles.buttonContainer}>
            <Text style={styles.button}>H</Text>
          </View>
        </View>
        <Text style={styles.par}>{p5Placar}</Text>
        <View style={styles.buttonView}>
          <View style={styles.buttonContainer}>
            <Text style={styles.button}>X</Text>
          </View>
        </View>
      </View>
      <View style={styles.container}>
        <Text style={styles.title}>Regras do Jogo</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.Subtitle}>Regra 1</Text>
        <Text style={styles.par}>{p1Rules}</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.Subtitle}>Observações Finais</Text>
        <Text style={styles.parObs}>{p1Obs}</Text>
      </View>
    </ScrollView>
  );
}
