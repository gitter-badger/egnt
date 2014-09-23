part of egnt_client_dart;

@Injectable()
@Component(
  selector: 'console', 
  templateUrl: 'packages/egnt_client_dart/component/console.html',
  useShadowDom: false,
  publishAs: 'ctrl'
)
class ConsoleComponent {
  String version = "0.0.1";  
}