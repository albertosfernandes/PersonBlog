import { Component, Input, OnInit } from '@angular/core';
import { ModelArticles } from 'src/app/model/model-articles';

@Component({
  selector: 'app-blogpost',
  templateUrl: './blogpost.component.html',
  styleUrls: ['./blogpost.component.css']
})
export class BlogpostComponent implements OnInit {

  constructor() { }
  
  content = '<div class="blog-post"><h2 class="blog-post-title">A base de tudo</h2><p>Este primeiro post começo falando sobre a infraestrutura. Optei em utilizar o serviço DNS da AWS Route53 devido sua alta diponibilidade e confiabilidade e também pela possibilidade de testar todos os recursos avançados do Route53.</p>     <hr>     <h2>Base da infraestrutura</h2>     <p>Onde quero chegar nessa primeira etapa da infraestrutura.</p> <img src="../assets/post01/ASF-Infa01.drawio.png" class="img-fluid" alt="">    <h4>Exibir meu nome para internet</h4>     <p>Primeiro passo é definir um nome que defina sua solução e como ela será conhecida na internet.</p>     <p>Para isso será preciso escolher um provedor para registrar este nome, meu caso resolvi utilizar o "https://registro.br/".</p>     <p>Para efetivar o registro primeiro precisa pesquisar sua disponibilidade, a primeira opção que deve aparecer é "PESQUISAR DOMÍNIO", junto com a resposta da pesquisa devem aparecer algumas opções de categoria:</p>     <ul>         <li>Atividades comerciais: <b>com.br</b></li>         <li>Tecnologia: <b>tec.br</b></li>         <li>Blogs: <b>blog.com</b></li>       </ul>     <p>Estes são alguns exemplos, existem diversos, abuse da criatividade!</p>     <p>Siga os passos para concluir seu registro. Por enquanto mantendo todas opções como padrão.</p>     <p><em>Importante lembrar ao leitor dependendo do provedor e tipo de registro que escolher existe uma taxa a ser paga.</em></p>     <h4>AWS Route53</h4>     <p>Uma vez definido e registrado o nome na internet, o próximo passo é escolher onde e como realizar as configurações para este nome registrado.</p>     <p>A AWS oferece um recurso muito rico para as configurações DNS chamado <b>Route53</b>.Ele foi projetado para ser altamente disponível e escalável gerenciado pela AWS, além de ser totalmente integrado com os recursos aws o que torna mais rápido e seguro os redirecionamentos.</p>     <p><em>A intenção deste post não é apresentar o Route53, embora seja um recurso incrível da AWS que vale um post. Para maiores informações: https://aws.amazon.com/pt/route53/</em></p>     <p>Na console AWS, acesse Route53 e clique em Hosted zones, em seguida "Create hosted zone".</p>  <img src="../assets/post01/aws-route53-01.png" class="img-fluid" alt="">  <p>No campo "Domain Name", coloque exatamente o mesmo nome que foi regristrado, defina como Public e confirme no botão "Create hosted zone".</p>   <img src="../assets/post01/aws-route53-02.png" class="img-fluid" alt="">  <p>Após a criação acesse o hosted zone criado expande a opção de Hosted zone details e anote os quatro Name Servers que a AWS cria automaticamente, vamos precisar deles para voltar no provedor e informar que utilizaremos esses quatro servidores dns para o registro criado.</p>  <img src="../assets/post01/aws-route53-03.png" class="img-fluid" alt=""></div>'
  @Input() post_content = '';
  

  ngOnInit(): void {
  }

}
